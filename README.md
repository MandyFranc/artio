
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/97ef2bc2-555c-4ef1-a81b-7e2cf63b67b5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/97ef2bc2-555c-4ef1-a81b-7e2cf63b67b5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/97ef2bc2-555c-4ef1-a81b-7e2cf63b67b5) and click on Share -> Publish.

## How to connect this project to a custom domain

You can connect your Artio app to a custom domain using Entri and GoDaddy. Follow these instructions:

### Using Entri with GoDaddy

1. **First, deploy your project on Lovable:**
   - Open [Lovable](https://lovable.dev/projects/97ef2bc2-555c-4ef1-a81b-7e2cf63b67b5)
   - Click on Share -> Publish
   - Copy the published URL (e.g., https://project-name.lovable.hosting)

2. **Purchase a domain on GoDaddy:**
   - Go to [GoDaddy](https://www.godaddy.com)
   - Search for and purchase your desired domain name
   - Access your GoDaddy account dashboard

3. **Set up Entri:**
   - Create an account on [Entri.com](https://entri.com)
   - Add your new project and select "Connect GoDaddy domain"
   - Follow Entri's guided process to connect your GoDaddy account
   - Select your domain from the list of available domains

4. **Configure your domain:**
   - In Entri, enter the Lovable hosting URL you copied earlier
   - Entri will automatically configure the necessary DNS records on GoDaddy
   - Choose whether you want to use a subdomain (e.g., app.yourdomain.com) or your root domain (yourdomain.com)

5. **Wait for DNS propagation:**
   - DNS changes can take up to 24-48 hours to fully propagate
   - You can check the status in your Entri dashboard

6. **Verify the connection:**
   - Once propagation is complete, visit your domain to ensure it correctly redirects to your Artio app
   - If there are any issues, check the Entri dashboard for troubleshooting

### Alternative: Direct DNS Configuration with GoDaddy

If you prefer to configure DNS directly:

1. Log in to your GoDaddy account
2. Go to "My Products" > select your domain > "DNS"
3. Add a CNAME record:
   - Name: www (or your preferred subdomain)
   - Value: Your Lovable hosting URL (without https://)
   - TTL: 1 Hour
4. For root domain redirection, add an A record or use GoDaddy's forwarding service

For more detailed instructions, visit [Entri's documentation](https://help.entri.com/en/articles/6594053-how-to-connect-a-godaddy-domain-to-entri) or [GoDaddy's DNS management guide](https://www.godaddy.com/help/manage-dns-records-680).
