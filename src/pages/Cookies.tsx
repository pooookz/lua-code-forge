
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 15, 2025</p>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2>1. Introduction</h2>
              <p>
                This Cookie Policy explains how LuaLearn ("we", "us", or "our") uses cookies and similar technologies when you visit our website, use our services, or interact with our platform (collectively, the "Service"). This policy explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p>
                By using or accessing our Service, you agree to the use of cookies as described in this policy.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>2. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide analytics, remember your preferences, and generally improve your browsing experience.
              </p>
              <p>
                Cookies set by the website owner (in this case, LuaLearn) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable features or functionality provided by third parties, such as advertising, interactive content, and analytics.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>3. Types of Cookies We Use</h2>
              <p>
                We use the following types of cookies for the purposes set out below:
              </p>
              
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Type of Cookie</TableHead>
                    <TableHead>Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="align-top font-medium">Essential Cookies</TableCell>
                    <TableCell>
                      These cookies are essential for the operation of our Service. They enable core functionality such as security, account login, and remembering your preferences. Without these cookies, the Service cannot be provided effectively.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-medium">Analytics Cookies</TableCell>
                    <TableCell>
                      These cookies allow us to recognize and count the number of visitors and see how they move around our Service. This helps us improve the way our Service works, for example, by ensuring that users can find what they are looking for easily.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-medium">Functionality Cookies</TableCell>
                    <TableCell>
                      These cookies are used to recognize you when you return to our Service. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-medium">Performance Cookies</TableCell>
                    <TableCell>
                      These cookies collect information about how visitors use our Service, for instance which pages visitors go to most often. We use this information to improve our Service and user experience.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-medium">Targeting/Advertising Cookies</TableCell>
                    <TableCell>
                      These cookies record your visit to our Service, the pages you have visited, and the links you have followed. We may use this information to make our Service and the advertising displayed on it more relevant to your interests.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>4. Specific Cookies We Use</h2>
              <p>
                Below is a detailed list of the cookies that we use on our Service:
              </p>
              
              <div className="overflow-x-auto mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Expiry</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>_session</TableCell>
                      <TableCell>LuaLearn</TableCell>
                      <TableCell>Maintains user session and authentication state</TableCell>
                      <TableCell>Session</TableCell>
                      <TableCell>Essential</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>_csrf</TableCell>
                      <TableCell>LuaLearn</TableCell>
                      <TableCell>Helps prevent cross-site request forgery attacks</TableCell>
                      <TableCell>Session</TableCell>
                      <TableCell>Essential</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>_ga</TableCell>
                      <TableCell>Google Analytics</TableCell>
                      <TableCell>Registers a unique ID used to generate statistical data on how visitors use the website</TableCell>
                      <TableCell>2 years</TableCell>
                      <TableCell>Analytics</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>_gid</TableCell>
                      <TableCell>Google Analytics</TableCell>
                      <TableCell>Registers a unique ID used to generate statistical data on how visitors use the website</TableCell>
                      <TableCell>24 hours</TableCell>
                      <TableCell>Analytics</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>user_preferences</TableCell>
                      <TableCell>LuaLearn</TableCell>
                      <TableCell>Stores user preferences such as theme settings and interface options</TableCell>
                      <TableCell>1 year</TableCell>
                      <TableCell>Functionality</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>course_progress</TableCell>
                      <TableCell>LuaLearn</TableCell>
                      <TableCell>Tracks progress in courses to enable resume functionality</TableCell>
                      <TableCell>1 year</TableCell>
                      <TableCell>Functionality</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>5. How to Control Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our Service may no longer be fully accessible.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Browser Controls</h3>
              <p>
                Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can obtain up-to-date information about blocking and deleting cookies via these links:
              </p>
              <ul>
                <li><a href="#" className="text-lua-purple">Chrome</a></li>
                <li><a href="#" className="text-lua-purple">Firefox</a></li>
                <li><a href="#" className="text-lua-purple">Safari</a></li>
                <li><a href="#" className="text-lua-purple">Edge</a></li>
                <li><a href="#" className="text-lua-purple">Opera</a></li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Our Cookie Preferences Tool</h3>
              <p>
                When you first visit our Service, you will be shown a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Preferences" link in the footer of our website.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Do Not Track</h3>
              <p>
                Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to have your online activity tracked. Our Service does not currently respond to "Do Not Track" signals.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>6. Other Tracking Technologies</h2>
              <p>
                In addition to cookies, we may use other similar technologies to track your interactions with our Service:
              </p>
              <ul>
                <li>
                  <strong>Web Beacons:</strong> Also known as "clear gifs" or "pixel tags," these are tiny graphics with a unique identifier that track online movements of users. We use these in HTML emails to know which emails have been opened.
                </li>
                <li>
                  <strong>Local Storage:</strong> We use local storage objects (LSOs) such as HTML5 localStorage to store content information and preferences.
                </li>
                <li>
                  <strong>Scripts:</strong> Scripts are pieces of code that are executed when you visit a website. They can be used to collect information about your interactions.
                </li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2>7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy. You should check this page regularly to stay informed about our use of cookies.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default Cookies;
