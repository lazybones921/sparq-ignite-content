
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // You'll need to replace this with your actual Google Form URL
  // To get this: Create a Google Form -> Send -> Link -> Copy the form URL
  // Then replace the '/viewform' part with '/formResponse'
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
  
  // You'll also need to replace these with your actual Google Form field names
  // To get these: Inspect your Google Form and look for input names like 'entry.123456789'
  const FORM_FIELDS = {
    name: 'entry.123456789',      // Replace with actual field name
    email: 'entry.987654321',     // Replace with actual field name  
    phone: 'entry.456789123',     // Replace with actual field name
    company: 'entry.789123456',   // Replace with actual field name
    message: 'entry.321654987'    // Replace with actual field name
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for Google Forms submission
      const formDataToSend = new FormData();
      formDataToSend.append(FORM_FIELDS.name, formData.name);
      formDataToSend.append(FORM_FIELDS.email, formData.email);
      formDataToSend.append(FORM_FIELDS.phone, formData.phone);
      formDataToSend.append(FORM_FIELDS.company, formData.company);
      formDataToSend.append(FORM_FIELDS.message, formData.message);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formDataToSend
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });

      // Reset form and close
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-1 hover:bg-black/40"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <Phone className="w-10 h-10 text-sparq-blue mx-auto mb-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Let's Connect</h2>
            <p className="text-gray-400 text-sm sm:text-base">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sparq-blue transition-colors text-sm"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sparq-blue transition-colors text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sparq-blue transition-colors text-sm"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Company/Brand
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sparq-blue transition-colors text-sm"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sparq-blue transition-colors resize-none text-sm"
                placeholder="Describe your content goals, target audience, and what you're looking to achieve..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-sparq-blue to-sparq-neon hover:from-sparq-blue/80 hover:to-sparq-neon/80 text-white font-bold py-2.5 rounded-full transition-all duration-300 text-sm disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
