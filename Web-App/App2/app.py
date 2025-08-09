from http.server import BaseHTTPRequestHandler, HTTPServer

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Welcome to App 2")
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(f"Error: {str(e)}".encode())

def run(server_class=HTTPServer, handler_class=RequestHandler):
    server_address = ('', 80)
    httpd = server_class(server_address, handler_class)
    print("Starting App 2 server...")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
