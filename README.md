# REAL-TIME-CHAT-SERVER

*COMPANY*: CODETECH IT SOLUTIONS

*NAME*: MOHIT DAMLE

*INTERN ID*: CT12WSJC

*DOMAIN*: BACKEND WEB DEVELOPMENT

*DURATION*: 12 WEEKS

*MENTOR*: NEELA SANTOSH

## 💬 Project Description

A real-time chat application powered by Django Web Framework built with Django Channels that supports text messaging, image sharing and file uploads in custom chat rooms. Provides seamless real time communication via Websocket and JavaScript. Multi-device responsive UI design with Bootstrap CSS Framework.

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Output Website Screenshot](#output-website-screenshot)
- [Technologies Used](#technologies-used)
- [Websocket Configuration](#websocket-configuration)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [File Upload Process](#file-upload-process)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## 📝 Features

- **Real-time Communication**: Instant messaging using WebSockets via Django Channels
- **Custom Chat Rooms**: Create and join different chat rooms
- **Multimedia Support**: Share text, images, and files in conversations
- **User Profiles**: Customizable user profiles with profile pictures, personal details, and more
- **Authentication System**: Custom login and signup pages
- **Modern UI**: Responsive design using Bootstrap CSS framework

## 💻 Output Website Screenshot

![Image](https://github.com/user-attachments/assets/cc524c89-2ea6-4df5-ace4-84d67de65498)

![Image](https://github.com/user-attachments/assets/a8cc2c1e-0619-4c01-bfc7-d35196bb6c2c)

![Image](https://github.com/user-attachments/assets/c76691aa-37f6-47a0-8950-896d520da639)

![Image](https://github.com/user-attachments/assets/6d7618ff-8fec-4d6d-a500-55a86e15fa64)

![Image](https://github.com/user-attachments/assets/fd3bbdaf-7c1f-46de-a676-c59c09f68c61)

![Image](https://github.com/user-attachments/assets/29c0d518-9989-4da4-b943-d02619c0af30)

![Image](https://github.com/user-attachments/assets/7d531813-eb16-461d-ad77-bc27dd88ef52)

## 🤖 Technologies Used

- Python
- Django (Python web framework)
- Django Channels (WebSocket support)
- Bootstrap 5 (Styling)
- JavaScript (Frontend interactivity)
- SQLite (Database)
- ASGI Server (Daphne)

## 🚀 WebSocket Configuration

The application uses Django Channels for WebSocket handling. The main components are:

1. **Consumers**: Handles WebSocket connections and messages
2. **Routing**: Maps WebSocket URLs to consumers
3. **ASGI Application**: Configures Django to handle both HTTP and WebSocket protocols


## 🛠️ Setup and Installation 

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

## 💡 Usage

1. Register an account or log in
2. Create a new chat room or join an existing one
3. Send messages, images or files in the chat interface
4. Click on a user's name to view their profile

## 📂 File Upload Process

1. Users select files through the interface
2. Files are read as Data URLs using the FileReader API
3. File data is sent through WebSocket as base64-encoded strings
4. Server decodes the base64 data and saves files to the media directory
5. File URLs are sent back to clients for display

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the [MIT License](LICENSE).
 

## 🙏 Acknowledgements

- [Django](https://www.djangoproject.com/) for rapid and clean website development
- [Django Channels](https://channels.readthedocs.io/en/latest/) for native ASGI support in Django
- [Websocket](https://pypi.org/project/websockets/) for two way interactive communication session
- [Bootstrap 5](https://getbootstrap.com/) for multi-device responsive UI design support
