import { Send, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:border-white"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          <div className="mt-8 text-sm text-white/80">
            <p>
              Have suggestions for improvement? Want to contribute as a teacher? 
              We'd love to hear from you! Fill out the form above and we'll get 
              back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}