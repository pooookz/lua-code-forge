
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: May 15, 2025</p>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to LuaLearn. By accessing or using our website, services, platform, and courses (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and LuaLearn ("we," "our," or "us"). You should read them carefully before using our Service.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>2. Account Registration</h2>
              <p>
                To access certain features of the Service, you may be required to register for an account. When you register, you agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Be responsible for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p>
                We reserve the right to disable any account if we believe you have violated these Terms or if we determine, in our sole discretion, that your account activity poses a risk to our Service or other users.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>3. Subscription and Payments</h2>
              <p>
                We offer various subscription plans to access our premium content and features. By subscribing to our Service, you agree to the following:
              </p>
              <ul>
                <li>You authorize us to charge the applicable fees to your chosen payment method</li>
                <li>Subscription fees are billed in advance on a recurring basis based on your chosen plan (monthly or annually)</li>
                <li>Your subscription will automatically renew until you cancel it</li>
                <li>You may cancel your subscription at any time through your account settings, but no refunds will be provided for the current billing period</li>
                <li>We reserve the right to change subscription fees upon notice to you, with changes taking effect at the start of your next billing cycle</li>
              </ul>
              <p>
                If you have questions about your subscription or billing, please contact our support team.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>4. Content and Intellectual Property</h2>
              <h3>4.1 Our Content</h3>
              <p>
                The Service and all content, features, and functionality (including but not limited to course materials, text, graphics, logos, button icons, images, audio clips, video clips, data compilations, and software) are owned by LuaLearn or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your personal, non-commercial educational purposes. This license does not allow you to:
              </p>
              <ul>
                <li>Copy, modify, or create derivative works of the Service or its content</li>
                <li>Use the Service for any commercial purpose</li>
                <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
                <li>Remove any copyright, trademark, or other proprietary notices</li>
                <li>Transfer your account or access to others</li>
                <li>Use the Service in any way that violates applicable laws or regulations</li>
              </ul>
              
              <h3>4.2 User Content</h3>
              <p>
                You may be able to submit, upload, or share content through our Service ("User Content"). By submitting User Content, you:
              </p>
              <ul>
                <li>Retain ownership of your User Content</li>
                <li>Grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display your User Content in connection with the Service</li>
                <li>Represent that you own or have the necessary permissions to use and authorize us to use your User Content</li>
                <li>Are responsible for all User Content you submit</li>
              </ul>
              <p>
                We do not claim ownership of your User Content, but we need these rights to provide the Service.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>5. Code of Conduct</h2>
              <p>
                When using our Service, you agree not to:
              </p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Post or transmit harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable content</li>
                <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from our servers</li>
                <li>Use automated scripts, bots, or other methods to access the Service</li>
                <li>Share your account credentials with others or use another user's account</li>
                <li>Collect or harvest any personal information from other users</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
              </ul>
              <p>
                We reserve the right to remove any content or suspend any user that violates these rules or that we find objectionable.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>6. Disclaimers</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              <p>
                EDUCATIONAL CONTENT IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE PROFESSIONAL ADVICE. WE DO NOT GUARANTEE SPECIFIC OUTCOMES OR RESULTS FROM USING OUR COURSES OR MATERIALS.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL LUALEARN, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
              </p>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING THE SERVICE DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless LuaLearn, its directors, employees, partners, agents, suppliers, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>9. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account through your account settings.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last updated" date at the top of these Terms and/or by sending you an email. Your continued use of the Service after such modifications will constitute your acknowledgment of the modified Terms and agreement to be bound by them.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@lualearn.com
              </p>
              <p>
                Address: LuaLearn Inc., 123 Learning Lane, San Francisco, CA 94105, USA
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
