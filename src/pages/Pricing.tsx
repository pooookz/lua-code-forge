
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  popular = false,
  buttonText = "Get Started"
}) => {
  return (
    <div className={`rounded-lg border ${popular ? 'border-lua-purple shadow-lg' : 'border-gray-200'} p-8 relative flex flex-col`}>
      {popular && (
        <Badge className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-lua-purple text-white">
          Most Popular
        </Badge>
      )}
      <h3 className="text-2xl font-bold text-lua-darkPurple mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-8 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button 
        className={popular ? "bg-lua-purple hover:bg-lua-darkPurple text-white" : "bg-white border border-lua-purple text-lua-purple hover:bg-lua-purple hover:text-white"}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for beginners looking to explore Lua programming",
      features: [
        "Access to 5 beginner courses",
        "Basic Lua playground",
        "Community forum access",
        "Code snippets library",
        "Limited exercises and projects"
      ]
    },
    {
      name: "Professional",
      price: "19",
      description: "For serious learners and professional developers",
      features: [
        "Access to all courses",
        "Advanced Lua playground",
        "Priority community support",
        "Downloadable course materials",
        "Unlimited exercises and projects",
        "Certificate of completion",
        "Monthly Q&A webinars"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "49",
      description: "For teams and organizations looking to upskill",
      features: [
        "Everything in Professional",
        "Team management dashboard",
        "Progress tracking for teams",
        "Custom learning paths",
        "Private team community",
        "Dedicated support manager",
        "Custom course development",
        "Bulk licensing discounts"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-lua-darkPurple mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that's right for you and start your Lua learning journey today.
            </p>
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
              <button className="py-2 px-4 rounded-md bg-white shadow-sm font-medium">Monthly</button>
              <button className="py-2 px-4 rounded-md font-medium text-gray-600">Annual (Save 20%)</button>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <PricingTier 
                  key={index}
                  name={tier.name}
                  price={tier.price}
                  description={tier.description}
                  features={tier.features}
                  popular={tier.popular}
                  buttonText={tier.buttonText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-lua-darkPurple mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-lua-darkPurple mb-2">Can I switch plans later?</h3>
                <p className="text-gray-700">
                  Yes, you can upgrade, downgrade or cancel your plan at any time. Upgrades take effect immediately, 
                  downgrades and cancellations take effect at the end of your billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lua-darkPurple mb-2">Is there a free trial?</h3>
                <p className="text-gray-700">
                  Yes, we offer a 7-day free trial on our Professional plan. No credit card required - just sign up and start learning!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lua-darkPurple mb-2">Do you offer student discounts?</h3>
                <p className="text-gray-700">
                  Absolutely! Students with valid .edu email addresses qualify for a 50% discount on our Professional plan.
                  Contact our support team to apply.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lua-darkPurple mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept all major credit cards, PayPal, and various local payment methods depending on your region.
                  For Enterprise plans, we can also arrange invoicing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-lua-purple text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Lua Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already learning and building with Lua.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-lua-purple hover:bg-gray-100">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
