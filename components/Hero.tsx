'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-b from-maple-beige to-maple-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maple-charcoal mb-6 animate-fadeIn">
            Get your family organized
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Trusted by families from all over the world to share household responsibilities.
          </p>
          
          {/* CTA Button */}
          <button className="btn-hover bg-maple-charcoal text-white px-8 py-4 rounded-full text-lg font-semibold mb-16 animate-fadeIn">
            Get Maple app
          </button>
        </div>

        {/* Phone Mockup Section */}
        <div className="relative flex justify-center items-center">
          {/* Handwritten annotations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Make Lists annotation */}
            <div className="absolute top-10 left-4 lg:left-20 handwritten-arrow">
              <div className="transform -rotate-12">
                <div className="text-maple-charcoal font-handwritten text-lg">Make:</div>
                <div className="text-maple-charcoal font-handwritten text-base ml-2">
                  • Lists<br/>• To-dos<br/>• Notes<br/>• Recipes<br/>... & more!
                </div>
              </div>
            </div>

            {/* Calendar annotation */}
            <div className="absolute bottom-20 left-8 lg:left-32 handwritten-arrow">
              <div className="transform rotate-6">
                <div className="text-maple-charcoal font-handwritten text-lg">
                  Calendar made for<br/><span className="underline">business families</span>
                </div>
              </div>
            </div>

            {/* Family photos annotation */}
            <div className="absolute top-8 right-4 lg:right-20 handwritten-arrow">
              <div className="transform rotate-12">
                <div className="text-maple-charcoal font-handwritten text-lg">Family photos</div>
              </div>
            </div>

            {/* AI organize annotation */}
            <div className="absolute bottom-16 right-8 lg:right-32 handwritten-arrow">
              <div className="transform -rotate-6">
                <div className="text-maple-charcoal font-handwritten text-lg">
                  AI to organize <span className="underline">FAST</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>

            {/* All emails annotation */}
            <div className="absolute bottom-32 right-4 lg:right-16 handwritten-arrow">
              <div className="transform rotate-8">
                <div className="text-maple-charcoal font-handwritten text-base">
                  All your family<br/>emails and chats<br/>in <span className="underline">one place</span>
                </div>
              </div>
            </div>

            {/* Pointing hand */}
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
              <div className="text-6xl animate-bounce-subtle">👇</div>
            </div>
          </div>

          {/* Phone Mockup Image */}
          <div className="relative phone-mockup max-w-4xl w-full">
            <Image
              src="/mobile-screens.png"
              alt="Maple app screenshots showing family organization features"
              width={800}
              height={600}
              priority
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Trusted by families from all over the world to share household responsibilities.
          </p>
        </div>
      </div>
    </section>
  )
}