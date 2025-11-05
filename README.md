# Awe Joseph - Developer Portfolio

![Portfolio Banner](https://github.com/user-attachments/assets/bc6527f1-d77c-4591-803b-0d19ef990da4)

A modern, full-stack portfolio website with an admin console for content management. Built with Next.js 16, TypeScript, Prisma, and NextAuth.

## ✨ Features

### Frontend
- 🎨 Modern, responsive design with dark theme
- ⚡ Built with Next.js 16 (App Router) and React 19
- 🎭 Smooth animations with AOS (Animate On Scroll)
- 📱 Fully mobile-responsive
- 🌐 SEO optimized
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS + Custom CSS modules

### Admin Console (`/console`)
- 🔐 Secure authentication with NextAuth v5
- 📊 Dashboard with real-time statistics
- 📝 Content management for:
  - Projects & Portfolio
  - Skills & Technologies
  - Services offered
  - Testimonials & Reviews
  - Blog articles
  - Tech events attended
  - Achievements & Certifications
  - Contact information
  - Social media links
- 📷 Image upload with Cloudinary integration
- 📋 Contact form submissions management
- 📅 Appointment booking system
- ⚙️ Site settings configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jossyboydgenius/Developer-portfolio.git
   cd Developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your credentials:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ADMIN_EMAIL="your-admin@email.com"
   ADMIN_PASSWORD="your-secure-password"
   
   # Cloudinary (optional)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Initialize the database**
   ```bash
   pnpm db:push
   pnpm db:seed
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Console: [http://localhost:3000/console](http://localhost:3000/console)
   
   **Default admin credentials:**
   - Email: `admin@example.com`
   - Password: `admin123`
   
   ⚠️ **Important:** Change these credentials immediately after first login!

## 📂 Project Structure

```
Developer-portfolio/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Database seeding script
├── public/                # Static assets
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── console/       # Admin console pages
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── Console/       # Admin console components
│   │   ├── About/         # About section
│   │   ├── Contact/       # Contact section
│   │   ├── Footer/        # Footer
│   │   ├── Hero/          # Hero section
│   │   ├── Navbar/        # Navigation
│   │   ├── Projects/      # Projects showcase
│   │   ├── Services/      # Services section
│   │   ├── Skill/         # Skills section
│   │   └── Testimonials/  # Testimonials
│   ├── lib/
│   │   ├── prisma.ts      # Prisma client
│   │   └── cloudinary.ts  # Cloudinary config
│   ├── data/
│   │   ├── sources.tsx    # Static data (legacy)
│   │   └── types.ts       # TypeScript types
│   └── auth.ts            # NextAuth configuration
├── .env                   # Environment variables
├── package.json
└── README.md
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Database
pnpm db:generate      # Generate Prisma Client
pnpm db:push          # Push schema to database
pnpm db:seed          # Seed database with initial data
pnpm db:studio        # Open Prisma Studio
```

## 🗄️ Database Models

The application includes comprehensive models for:

- **User** - Admin authentication
- **About** - About me section
- **Project** - Portfolio projects
- **Skill** - Technical skills
- **Service** - Services offered
- **Testimonial** - Client reviews
- **Article** - Blog posts
- **Event** - Tech events attended
- **Achievement** - Certifications & awards
- **Social** - Social media links
- **ContactOption** - Contact methods
- **Booking** - Appointment bookings
- **ContactSubmission** - Contact form messages
- **SiteSetting** - Site configuration

## 🔐 Authentication

The admin console uses NextAuth v5 with:
- Credentials provider
- JWT session strategy
- Protected routes via middleware
- Secure password hashing with bcryptjs

## 📸 Image Upload

Cloudinary integration for:
- Project screenshots
- Blog cover images
- Profile pictures
- Event photos
- Achievement badges

## 🌐 API Routes

API endpoints for CRUD operations:
- `/api/projects` - Manage projects
- `/api/skills` - Manage skills
- `/api/services` - Manage services
- `/api/testimonials` - Manage testimonials
- `/api/blog` - Manage blog articles
- `/api/bookings` - Manage appointments
- `/api/messages` - Handle contact submissions

## 🎯 Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- React Icons
- AOS (Animations)
- Sonner (Toast notifications)
- React Slick (Carousels)

**Backend:**
- Next.js API Routes
- Prisma ORM
- SQLite (development) / PostgreSQL (production)
- NextAuth v5
- bcryptjs

**Media:**
- Cloudinary

**Forms:**
- React Hook Form
- Zod validation
- Formspree (contact form)

## 📝 Content Management

### Admin Console Features:

1. **Dashboard** - Overview of all content statistics
2. **Projects** - Add, edit, delete portfolio projects with:
   - Title, description, category
   - Demo & GitHub links
   - Tech stack tags
   - Featured flag
   - Image uploads

3. **Blog** - Write and publish articles with:
   - Rich text editor
   - Cover images
   - Categories & tags
   - Draft/publish status
   - SEO metadata

4. **Services** - Manage service offerings
5. **Skills** - Organize technical skills by category
6. **Testimonials** - Client reviews and ratings
7. **Events** - Tech conferences and meetups attended
8. **Bookings** - Appointment scheduling system
9. **Messages** - Contact form submissions
10. **Settings** - Site-wide configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production

```env
DATABASE_URL="postgresql://..."  # PostgreSQL connection string
NEXTAUTH_SECRET="strong-secret-key"
NEXTAUTH_URL="https://yourdomain.com"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

## 🔒 Security

- Protected admin routes with middleware
- Secure password hashing
- JWT-based sessions
- CSRF protection
- Environment variable validation
- SQL injection prevention (Prisma)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Awe Joseph (TechApostle)**
- GitHub: [@Jossyboydgenius](https://github.com/Jossyboydgenius)
- Email: awejosepholaitan@gmail.com
- Location: Lagos, Nigeria

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ by Awe Joseph

