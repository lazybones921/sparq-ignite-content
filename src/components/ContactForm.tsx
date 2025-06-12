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

  // Your Google Form submission URL
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfEi4xmHsQaM1c-07jm_mCGv7C3RhL0FmaMmFoYbMMAc5hveA/viewform?usp=dialog';
  
  const FORM_FIELDS = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    phone: 'entry.1166974658',
    company: 'entry.839337160',
    message: 'entry.706368727'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submission started');
    console.log('Form data:', formData);
    console.log('Google Form URL:', GOOGLE_FORM_URL);
    console.log('Form fields mapping:', FORM_FIELDS);

    try {
      // Method 1: Try with URLSearchParams and fetch
      const formDataToSend = new URLSearchParams();
      formDataToSend.append(FORM_FIELDS.name, formData.name);
      formDataToSend.append(FORM_FIELDS.email, formData.email);
      formDataToSend.append(FORM_FIELDS.phone, formData.phone);
      formDataToSend.append(FORM_FIELDS.company, formData.company);
      formDataToSend.append(FORM_FIELDS.message, formData.message);

      console.log('Sending data:', formDataToSend.toString());

      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      console.log('Response received (no-cors mode, limited info available)');

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
      
      // Try fallback method with hidden iframe
      console.log('Trying fallback method with iframe...');
      try {
        // Create a hidden iframe for submission
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.name = 'hidden_iframe';
        iframe.onload = () => {
          console.log('Iframe loaded - form likely submitted successfully');
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
        };
        document.body.appendChild(iframe);

        // Create a form element
        const form = document.createElement('form');
        form.target = 'hidden_iframe';
        form.method = 'POST';
        form.action = GOOGLE_FORM_URL;

        // Add form fields
        const fields = [
          { name: FORM_FIELDS.name, value: formData.name },
          { name: FORM_FIELDS.email, value: formData.email },
          { name: FORM_FIELDS.phone, value: formData.phone },
          { name: FORM_FIELDS.company, value: formData.company },
          { name: FORM_FIELDS.message, value: formData.message }
        ];

        fields.forEach(field => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = field.name;
          input.value = field.value;
          form.appendChild(input);
          console.log(`Added field: ${field.name} = ${field.value}`);
        });

        document.body.appendChild(form);
        console.log('Submitting form via iframe method...');
        form.submit();

        // Clean up after a delay
        setTimeout(() => {
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 5000);

      } catch (fallbackError) {
        console.error('Fallback method also failed:', fallbackError);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
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
