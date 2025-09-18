import { useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { siteContent } from "@/data/content";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
  const { toast } = useToast();
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });
  
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

    try {
      const { sendEmail } = await import('@/lib/email');
      
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="section-container"
      aria-labelledby="contact-heading"
    >
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-16 reveal-fade-up",
          headingVisible && "visible"
        )}
      >
        <h2 id="contact-heading" className="section-heading">Get in Touch</h2>
        <p className="section-subheading">
          Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
        </p>
      </div>

      <div 
        ref={contentRef}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-5 gap-12 reveal-fade-up",
          contentVisible && "visible"
        )}
      >
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
