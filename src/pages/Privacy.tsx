
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 15, 2025</p>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2>1. Introduction</h2>
              <p>
                Welcome to LuaLearn ("we," "our," or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, and platform (collectively, the "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our Service.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Create an account or register for our Service</li>
                <li>Purchase a subscription or enroll in courses</li>
                <li>Contact our support team</li>
                <li>Participate in forums, discussions, or community features</li>
                <li>Submit content or feedback</li>
                <li>Complete surveys or questionnaires</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Billing information</li>
                <li>Educational background</li>
                <li>Profile information</li>
                <li>Content you create, upload, or share on our platform</li>
              </ul>
              
              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you access or use our Service, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Usage data (pages visited, features used, time spent, etc.)</li>
                <li>Course progress and learning activities</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and manage your account</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Track your progress and learning activities</li>
                <li>Communicate with you about updates, offers, and announcements</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues or security breaches</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>4. Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party service providers that perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of collection.
                </li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Objecting to or restricting certain processing activities</li>
                <li>Requesting a copy of your personal information in a structured, commonly used format</li>
                <li>Withdrawing consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>8. Children's Privacy</h2>
              <p>
                Our Service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so that we can take appropriate action.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@lualearn.com
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

export default Privacy;
