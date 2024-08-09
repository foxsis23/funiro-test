import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";


export default function Home() {
  return (
      <div className="flex flex-row w-full bg-[#F9F1E7] relative">
          <div className="mt-36 mx-auto">
              <Carousel className="w-[1300px]" opts={{loop:true}}>
                  <CarouselContent>
                      <CarouselItem className="w-[600px]">
                          <img className="h-[500px] w-[900px]" src="https://s3-alpha-sig.figma.com/img/49fc/0429/c4613af2a4e6c1b94a0bdbbb862009b2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKh2S1S8fx7~5odGBZjCbzSl1wcS8IFMEU5mVZdb~3ZMUf-ndNXBVJMGRP2B-~sZvhAIn5YIwkT7PaLJx18ox9ggf364zbKgzOHgjTzZ8NYG6w-~qwjDosTkWgJ2j~GRBeeQ48ygOzRECbZnAnDaF1etsfTtWY~w86qQ8uRj6fXR8C2IJKiLULh4F9p6c5qjfeMK8zmOnoQzZz9Pti9caWslzVjK-5hNEMaDklr2luQpPdJTOo6HmsAG1GQ8AbX2ZUEcN-8JYsLsPMysweHKqDJDnjiZ6bTVOuyLs2nTc8CAClCTiuLA6ie5j-PzWmpDP21BPSsXtTg2UA-wB4a2iA__" alt=""/>
                      </CarouselItem>
                      <CarouselItem className="w-[600px]">
                          <img className="h-[500px] w-[900px]" src="https://s3-alpha-sig.figma.com/img/0377/3802/157dc756f64c0f2e4e93d6fea0c7c23b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRaPFluUpM9AimQJ72U72jCs16WQp-HMWSHODLq-kJkiyHFlBKnqc-NXvZT3aMHqWLrCCnSVXj5O2WOn4FXuVWiUnXdirxHMCEgS63XjpSNLKHjDDS0u4B3l5QXnHq0bePzZoh0JZsQznWSqHrpvAU1~SZwBh3~3MZVqdGjYT7xcaZnU5hvLzgp8FzN~5AVx-bhorZRmfwo0lk~qtnKzDs8RQ1N1P9Ls~NO3X9DgZw-4RlcbSZfq~Ucup7uw4ISQFwkB2sq2hTqkUxhiw24D~MzRDH8~REw0huvM6wNrdKzPTHyrHs0jFyA5vF0f0uGGESXbpJ6GnK87kSA1TWBMKA__" alt=""/>
                      </CarouselItem>
                      <CarouselItem className="w-[600px]">
                          <img className="h-[500px] w-[900px]" src="https://s3-alpha-sig.figma.com/img/9c37/2fe8/965eb67a69b0e20edcbe632460a2627c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMQnpCZ8gmTHzznFBFvFzjsBRJBTn9cDpgPbKV~11o5HIIn6SBeZuKJ3u31iTQI7XF7rtGJrew6xiGI9aX4kafLLMhD5iyGdCzqRLsAE1vFZ8gcwDZI7uFrALX0hv2PR4d6fqqjPvEXpc7z0JoMOgkwMEJZ57kO4IB4JlSFSqnTkctSGgr2W4WERlI0iLZr4mIerIuq67rbpPcchz0ahXfVzmiSGp6dhfpZZYwKGRCF77phMJVq~h~8z03~NgprV~k6ZYPzUBOoH88XGY4rxvRSVUIye4nND4kUZ30q41tjB99DgIA904ViXtvlz~T-IdiWxWtt3H1dMmwAu0DM5Tw__" alt=""/>
                      </CarouselItem>
                  </CarouselContent>
                  <div className="absolute top-[-30px] left-[1200px] z-10">
                      <CarouselPrevious className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10" />
                      <CarouselNext className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10" />
                  </div>

              </Carousel>
          </div>
      </div>

  )
}
