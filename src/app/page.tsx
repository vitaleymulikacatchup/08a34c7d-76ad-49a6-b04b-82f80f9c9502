"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Award, Bed, Building, ChefHat, Crown, Heart, Phone, Sparkles, Star, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Experience", id: "experience" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled comfort and sophistication at Grand Vista Hotel, where every moment becomes a treasured memory."
          tag="5-Star Excellence"
          tagIcon={Crown}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Where timeless elegance meets modern luxury, creating unforgettable experiences for discerning travelers who seek the finest in hospitality and comfort."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Awards & Recognition", href: "experience" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Luxury Accommodations"
          description="Choose from our collection of meticulously designed rooms and suites"
          tag="Featured Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Suite with City View",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe suite with modern furnishings",
              initialQuantity: 1
            },
            {
              id: "oceanview",
              name: "Ocean View Premium Room",
              price: "$459/night",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ocean view room with private balcony",
              initialQuantity: 1
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite with luxury living area",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Discover exceptional facilities designed for your comfort and pleasure"
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind with our comprehensive spa treatments and state-of-the-art fitness facilities",
              icon: Heart,
              button: { text: "Book Spa", href: "contact" }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor culinary masterpieces crafted by our award-winning chefs using the finest local and international ingredients",
              icon: ChefHat,
              button: { text: "View Menu", href: "dining" }
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Relax by our stunning infinity pool with panoramic views, perfect for sunset cocktails and leisurely afternoons",
              icon: Waves,
              button: { text: "Pool Hours", href: "amenities" }
            },
            {
              title: "Business Center",
              description: "Fully equipped meeting rooms and business facilities for corporate travelers and special events",
              icon: Building,
              button: { text: "Book Meeting", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Read reviews from our valued guests who have experienced our exceptional hospitality"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              testimonial: "Exceptional service and attention to detail. The staff went above and beyond to make my business trip comfortable and productive. The spa was a perfect way to unwind after long meetings.",
              imageSrc: "https://images.pexels.com/photos/3885601/pexels-photo-3885601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              testimonial: "Grand Vista Hotel sets the gold standard for luxury hospitality. From the moment I arrived, every aspect exceeded my expectations. The ocean view room was breathtaking.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Wedding Planner",
              testimonial: "We hosted our anniversary celebration here and it was magical. The event coordination team was flawless, and the fine dining restaurant provided an unforgettable culinary experience.",
              imageSrc: "https://images.pexels.com/photos/34519511/pexels-photo-34519511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "CEO",
              testimonial: "The presidential suite offers unparalleled luxury and comfort. Perfect for important client meetings and relaxation. The business center facilities are top-notch and professional.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Travel Partners"
          description="Featured on major booking platforms and trusted by hospitality industry leaders"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6466488/pexels-photo-6466488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6466488/pexels-photo-6466488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Ready to Experience Luxury?"
          description="Contact our reservation specialists to book your perfect stay at Grand Vista Hotel. We're here to make your experience extraordinary."
          tagIcon={Phone}
          inputPlaceholder="Enter your email for booking updates"
          buttonText="Get Booking Info"
          termsText="By providing your email, you agree to receive booking confirmations and special offers from Grand Vista Hotel."
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge ready to assist guests"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Event Planning", href: "events" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "services" },
                { label: "Location", href: "location" },
                { label: "Careers", href: "careers" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Vista Hotel"
        />
      </div>
    </ThemeProvider>
  );
}