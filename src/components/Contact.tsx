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
          "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out",
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 id="contact-heading" className="section-heading font-display">Let's Build Something Great</h2>
        <p className="section-subheading mt-2">
          Have a project in mind or want to discuss a new digital build? I'd love to hear from you.
        </p>
      </div>

      <div 
        ref={contentRef}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-5 gap-12 reveal-fade-up",
          contentVisible && "visible"
        )}
      >
        <aside className="lg:col-span-2 space-y-6" aria-label="Contact information">
          <div className="rounded-2xl p-7 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-muted-foreground">
                Inquiries
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-foreground">Contact Information</h3>
            <p className="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed mb-6">
              Have a project in mind or want to discuss a new digital build? Reach out directly via email or phone.
            </p>

            <address className="space-y-4 not-italic font-sans pt-4 border-t border-border/20">
              <div className="group flex items-start gap-3">
                <div className="p-2 rounded-lg bg-secondary/50 border border-border/30 text-primary mt-0.5 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-0.5">Direct Email</span>
                  <a
                    href={`mailto:${siteContent.personal.email}`}
                    className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono"
                    aria-label={`Send email to ${siteContent.personal.email}`}
                  >
                    {siteContent.personal.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-3 pt-1">
                <div className="p-2 rounded-lg bg-secondary/50 border border-border/30 text-primary mt-0.5 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-0.5">Phone / WhatsApp</span>
                  <a
                    href={`tel:${siteContent.personal.phone}`}
                    className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono"
                    aria-label={`Call ${siteContent.personal.phone}`}
                  >
                    {siteContent.personal.phone}
                  </a>
                </div>
              </div>
            </address>
          </div>

          <div className="rounded-2xl p-6 border border-border/40 bg-card/60 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <h4 className="font-bold text-xs font-mono uppercase tracking-wider text-foreground">Current Availability</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Currently taking on select client web projects. Schedule a call to discuss your goals and timeline.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit} 
            className="rounded-2xl p-8 md:p-10 shadow-lg border border-border/40 bg-card/60 backdrop-blur-md hover:border-primary/30 transition-all duration-300"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 font-sans">
              <div>
                <label htmlFor="name" className="block text-xs font-bold font-display mb-2 text-foreground">
                  Name <span className="text-destructive" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs border border-border/40 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background/60 text-foreground"
                  required
                  aria-required="true"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold font-display mb-2 text-foreground">
                  Email <span className="text-destructive" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs border border-border/40 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background/60 text-foreground"
                  required
                  aria-required="true"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mb-5 font-sans">
              <label htmlFor="subject" className="block text-xs font-bold font-display mb-2 text-foreground">
                Subject <span className="text-destructive" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-xs border border-border/40 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background/60 text-foreground"
                required
                aria-required="true"
                placeholder="Project overview or inquiry"
              />
            </div>

            <div className="mb-6 font-sans">
              <label htmlFor="message" className="block text-xs font-bold font-display mb-2 text-foreground">
                Message <span className="text-destructive" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2.5 text-xs border border-border/40 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background/60 text-foreground resize-none"
                required
                aria-required="true"
                placeholder="Tell me about your business goals and target timeline..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-xs font-semibold text-primary-foreground shadow-xs transition-all duration-200 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] w-full disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
