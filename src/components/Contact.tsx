import { useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { siteContent } from "@/data/content";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="section-container"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 id="contact-heading" className="section-heading">Get in Touch</h2>
        <p className="section-subheading">
          Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <aside className="lg:col-span-2 space-y-8" aria-label="Contact information">
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through the contact form or directly via email or phone.
            </p>
          </div>

          <address className="space-y-6 not-italic">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-accent/10 mt-0.5">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href={`mailto:${siteContent.personal.email}`}
                  className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
                  aria-label={`Send email to ${siteContent.personal.email}`}
                >
                  {siteContent.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-accent/10 mt-0.5">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href={`tel:${siteContent.personal.phone}`}
                  className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
                  aria-label={`Call ${siteContent.personal.phone}`}
                >
                  {siteContent.personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-accent/10 mt-0.5">
                <MessageSquare className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <div className="flex items-center gap-4 mt-2" role="list" aria-label="Social media links">
                  <a 
                    href={siteContent.social.linkedin} 
                    className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md p-1"
                    aria-label="Visit my LinkedIn profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href={siteContent.social.github} 
                    className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md p-1"
                    aria-label="Visit my GitHub profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </address>

          <div className="pt-8">
            <div className="bg-secondary/40 p-6 rounded-xl">
              <h4 className="font-medium mb-2">Current Availability</h4>
              <p className="text-sm text-muted-foreground">
                I'm currently available for new projects starting from <span className="font-medium text-foreground">{siteContent.personal.availability}</span>.
                Let's schedule a call to discuss how I can help with your project.
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit} 
            className="glass-panel rounded-xl p-8 shadow-lg"
            aria-label="Contact form"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-destructive" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-background"
                  required
                  aria-required="true"
                  aria-describedby="name-error"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-background"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject <span className="text-destructive" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-background"
                required
                aria-required="true"
                aria-describedby="subject-error"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-destructive" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-background resize-none"
                required
                aria-required="true"
                aria-describedby="message-error"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full disabled:opacity-70 disabled:cursor-not-allowed"
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span id="submit-status">Sending Message...</span>
                </>
              ) : (
                <span id="submit-status">Send Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
