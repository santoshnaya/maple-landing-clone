import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-b from-maple-beige to-maple-warm overflow-hidden mt-[150px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[100px]">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maple-charcoal mb-6 animate-fadeIn">
            Give your child the gift of{' '}
            <span className="text-maple-green">financial literacy</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-maple-charcoal/70 mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
            Teaching kids about money through real-world experiences and family conversations that build lifelong financial confidence.
          </p>
          
          {/* CTA Button */}
          <div className="inline-block animate-fadeIn animation-delay-400">
            <button className="bg-maple-green hover:bg-maple-green/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Learning Today
            </button>
          </div>
        </div>

        {/* Phone Mockup with Annotations */}
        <div className="relative flex justify-center items-center max-w-2xl mx-auto">
          {/* Container for phone and annotations */}
          <div className="relative">
            {/* Phone Image */}
            <div className="relative z-10">
              <Image
                src="/mobile-screens.png"
                alt="Maple app interface showing family financial features"
                width={400}
                height={600}
                priority
                
              />
            </div>

            {/* Handwritten Style Annotations */}
            {/* Track spending annotation - top left */}
            <div className="absolute top-16 -left-32 hidden lg:block">
              <div className="handwritten-annotation">
                <div className="flex items-center">
                  <span className="text-maple-green font-handwriting text-lg transform -rotate-12">
                    Track family spending together
                  </span>
                  <div className="ml-2 w-16 h-0.5 bg-maple-green transform rotate-12"></div>
                </div>
              </div>
            </div>

            {/* Set goals annotation - top right */}
            <div className="absolute top-20 -right-28 hidden lg:block">
              <div className="handwritten-annotation">
                <div className="flex items-center">
                  <div className="mr-2 w-12 h-0.5 bg-maple-coral transform -rotate-12"></div>
                  <span className="text-maple-coral font-handwriting text-lg transform rotate-12">
                    Set savings goals
                  </span>
                </div>
              </div>
            </div>

            {/* Learn together annotation - bottom left */}
            <div className="absolute bottom-24 -left-36 hidden lg:block">
              <div className="handwritten-annotation">
                <div className="flex items-center">
                  <span className="text-maple-mint font-handwriting text-lg transform rotate-6">
                    Learn financial lessons as a family
                  </span>
                  <div className="ml-2 w-20 h-0.5 bg-maple-mint transform -rotate-6"></div>
                </div>
              </div>
            </div>

            {/* Celebrate wins annotation - bottom right */}
            <div className="absolute bottom-16 -right-32 hidden lg:block">
              <div className="handwritten-annotation">
                <div className="flex items-center">
                  <div className="mr-2 w-16 h-0.5 bg-maple-yellow transform rotate-6"></div>
                  <span className="text-maple-yellow font-handwriting text-lg transform -rotate-6">
                    Celebrate financial wins! 🎉
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}