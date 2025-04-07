# REAL-TIME-CHAT-SERVER

*COMPANY*: CODETECH IT SOLUTIONS

*NAME*: MOHIT DAMLE

*INTERN ID*: CT12WSJC

*DOMAIN*: BACKEND WEB DEVELOPMENT

*DURATION*: 12 WEEKS

*MENTOR*: NEELA SANTOSH

## Project Description

A real-time chat application built with Django Channels that supports text messaging, image sharing and file uploads in custom chat rooms.

## Output Website Screenshot

## Features

- **Real-time Communication**: Instant messaging using WebSockets via Django Channels
- **Custom Chat Rooms**: Create and join different chat rooms
- **Multimedia Support**: Share text, images, and files in conversations
- **User Profiles**: Customizable user profiles with profile pictures, personal details, and more
- **Authentication System**: Custom login and signup pages
- **Modern UI**: Responsive design using Bootstrap CSS framework

## Technologies Used

- Python
- Django (Python web framework)
- Django Channels (WebSocket support)
- Bootstrap 5 (Styling)
- JavaScript (Frontend interactivity)
- SQLite (Database)
- ASGI Server (Daphne)

## Installation

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/django-channels-chat.git
   cd django-channels-chat
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables (create a `.env` file in the project root):
   ```
   SECRET_KEY=your_secret_key
   DEBUG=True
   REDIS_URL=redis://localhost:6379/0
   ```

5. Apply migrations:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

7. Run the development server:
   ```bash
   python manage.py runserver
   ```

## WebSocket Configuration

The application uses Django Channels for WebSocket handling. The main components are:

1. **Consumers**: Handles WebSocket connections and messages
2. **Routing**: Maps WebSocket URLs to consumers
3. **ASGI Application**: Configures Django to handle both HTTP and WebSocket protocols


## WebSocket Consumer

The `ChatConsumer` handles WebSocket connections, manages chat rooms, and processes messages including file uploads.

## Usage

1. Register an account or log in
2. Create a new chat room or join an existing one
3. Send messages, images or files in the chat interface
4. Click on a user's name to view their profile

## File Upload Process

1. Users select files through the interface
2. Files are read as Data URLs using the FileReader API
3. File data is sent through WebSocket as base64-encoded strings
4. Server decodes the base64 data and saves files to the media directory
5. File URLs are sent back to clients for display

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
