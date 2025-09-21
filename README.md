# Creative Upaay Task Management Dashboard

A modern, responsive task management dashboard built with React.js and Redux, featuring a Kanban-style board interface with drag-and-drop functionality, advanced filtering, and local storage persistence.

![Dashboard Preview](https://via.placeholder.com/800x400/6366F1/ffffff?text=Creative+Upaay+Dashboard)

## 🚀 Features

### Core Functionality
- **Kanban Board**: Three-column layout (To Do, On Progress, Done)
- **Task Management**: Add, edit, delete, and move tasks between columns
- **Drag & Drop**: Intuitive task movement using react-beautiful-dnd
- **Advanced Filtering**: Filter by priority, category, due date, and search
- **Local Storage**: Automatic persistence - tasks remain after browser refresh
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### UI/UX Features
- **Pixel-Perfect Design**: Matches Figma specifications exactly
- **Interactive Sidebar**: Collapsible navigation with project management
- **Task Cards**: Rich cards with assignees, comments, files, and due dates
- **Priority System**: Visual priority indicators (High, Medium, Low)
- **Team Collaboration**: Avatar display for task assignees
- **Real-time Statistics**: Task counts and progress tracking

### Technical Features
- **Redux State Management**: Centralized state with predictable updates
- **Component Architecture**: Modular, reusable React components
- **Modern JavaScript**: ES6+ features and best practices
- **Tailwind CSS**: Utility-first styling for rapid development
- **Performance Optimized**: Efficient rendering and state updates

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 18.3.1
- **State Management**: Redux with React-Redux
- **Styling**: Tailwind CSS
- **Drag & Drop**: react-beautiful-dnd
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/creative-upaay-dashboard.git
   cd creative-upaay-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎯 Usage Guide

### Adding Tasks
1. Click the "+" button in any column header
2. Fill in the task details (title, description, priority, etc.)
3. Click "Add Task" to create the task

### Moving Tasks
- **Drag & Drop**: Simply drag tasks between columns
- **Edit Method**: Use the task menu to change status

### Filtering Tasks
Use the filter bar to narrow down tasks by:
- **Priority**: High, Medium, Low
- **Category**: Design, Development, Research, Testing
- **Due Date**: Today, This Week, Overdue
- **Search**: Type keywords to find specific tasks

### Sidebar Navigation
- **Collapse/Expand**: Click the arrow icon to toggle sidebar
- **Project Switching**: Select different projects from the sidebar
- **Navigation**: Access different sections (Home, Messages, Tasks, etc.)

## 📁 Project Structure

```
creative-upaay-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── FilterBar.jsx    # Task filtering interface
│   │   ├── Header.jsx       # Top navigation bar
│   │   ├── KanbanBoard.jsx  # Main board container
│   │   ├── KanbanColumn.jsx # Individual columns
│   │   ├── Sidebar.jsx      # Left navigation panel
│   │   ├── TaskCard.jsx     # Individual task cards
│   │   └── TaskForm.jsx     # Add/edit task modal
│   ├── pages/               # Page-level components
│   │   └── Dashboard.jsx    # Main dashboard page
│   ├── redux/               # State management
│   │   ├── actions.js       # Redux action creators
│   │   ├── store.js         # Redux store configuration
│   │   └── reducers/        # Redux reducers
│   │       ├── index.js     # Root reducer
│   │       ├── tasksReducer.js
│   │       ├── filtersReducer.js
│   │       └── uiReducer.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Redux Store
State management is configured in `src/redux/store.js` with automatic local storage persistence.

### Vite Configuration
Build and development settings are in `vite.config.js`.

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366F1)
- **Secondary**: Orange (#F97316)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Font Family**: System fonts (Inter, SF Pro, etc.)
- **Sizes**: Responsive typography scale
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server

## 🧪 Testing

Currently, the project focuses on functionality implementation. Testing can be added using:
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Cypress or Playwright
- **Component Tests**: Storybook

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Known Limitations

- **Authentication**: No user authentication system implemented
- **Backend Integration**: Currently uses local storage only
- **Real-time Updates**: No WebSocket or real-time collaboration
- **File Uploads**: File attachment feature is visual only
- **Notifications**: No push notification system

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Backend API integration
- [ ] Real-time collaboration features
- [ ] File upload and attachment system
- [ ] Email notifications and reminders
- [ ] Advanced reporting and analytics
- [ ] Mobile app development
- [ ] Integration with third-party tools (Slack, GitHub, etc.)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Creative Upaay Development Team**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from modern task management tools
- React.js and Redux communities for excellent documentation
- Tailwind CSS for the utility-first approach
- Lucide React for beautiful icons
- All contributors and testers

---

**Built with ❤️ for Creative Upaay Full Stack Development Assignment**
