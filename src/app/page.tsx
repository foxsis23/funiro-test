import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {ArrowRight, BadgeCheck, Handshake, Speech, Trophy} from "lucide-react";
import Card from "@/components/common/Card";
import {Separator} from "@/components/ui/separator";


const cards = [
    {
        title:'Syltherine',
        text:'Stylish cafe chair',
        price:'Rp 2.500.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    },
    {
        title:'Lolito',
        text:'Luxury big sofa',
        price:'Rp 7.000.000',
        img:'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BroSxd2gwcd~R7dyOEnhT~WUa8MxAEZouDwzp~9d5xX57SNScCgxIAzWGuTtXl-qPjg3IBtgC8JMRkDf0BceBGWZ5QdgHvFg5dj1ufnrBrWFF9M80~LcZRM5yLUO2H7L7Z6Qnu3v7Zz6tK-h8CNnP1-XeTMr42BqT5OjIhYwCiixIPt2jB-FzodADT0kgBGRfzIEcptbDXqKoKsi~ELnCOdm-HZqR8-1q~b-y4h~rN6162vd-1HNdI1a9eqjsE3d8Bvs5A71O4IhSgfTeEAR4t0PFHroeKfy2QkYe1duCTAdSTWGenCB5kGWeb1A0trKiqVxrcwDGtE4-G2pmvaXVg__'
    }
]


export default function Home() {
  return (
      <>
          <div className="flex flex-row w-full bg-[#F9F1E7] relative">
              <div className="mt-36 mx-auto">
                  <Carousel className="w-[1000px]" opts={{loop: true}}>
                      <CarouselContent>
                          <CarouselItem className="w-[600px] relative">
                              <img className="h-[500px] w-[900px]"
                                   src="https://s3-alpha-sig.figma.com/img/49fc/0429/c4613af2a4e6c1b94a0bdbbb862009b2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKh2S1S8fx7~5odGBZjCbzSl1wcS8IFMEU5mVZdb~3ZMUf-ndNXBVJMGRP2B-~sZvhAIn5YIwkT7PaLJx18ox9ggf364zbKgzOHgjTzZ8NYG6w-~qwjDosTkWgJ2j~GRBeeQ48ygOzRECbZnAnDaF1etsfTtWY~w86qQ8uRj6fXR8C2IJKiLULh4F9p6c5qjfeMK8zmOnoQzZz9Pti9caWslzVjK-5hNEMaDklr2luQpPdJTOo6HmsAG1GQ8AbX2ZUEcN-8JYsLsPMysweHKqDJDnjiZ6bTVOuyLs2nTc8CAClCTiuLA6ie5j-PzWmpDP21BPSsXtTg2UA-wB4a2iA__"
                                   alt=""/>
                              <div className="absolute p-4 bottom-5 left-[700px] backdrop-blur-xl">
                                  <p className="text-xl font-bold">Bohauss</p>
                                  <p className="text-sm text-slate-200">Luxury big sofa 2-seat</p>
                                  <div className="flex flex-row justify-between items-center">
                                      <p className="text-lg font-bold">Rp 17.000.000</p>
                                      <ArrowRight className="h-4 w-4"/>
                                  </div>
                              </div>
                          </CarouselItem>
                          <CarouselItem className="w-[600px] relative">
                              <img className="h-[500px] w-[900px]"
                                   src="https://s3-alpha-sig.figma.com/img/0377/3802/157dc756f64c0f2e4e93d6fea0c7c23b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRaPFluUpM9AimQJ72U72jCs16WQp-HMWSHODLq-kJkiyHFlBKnqc-NXvZT3aMHqWLrCCnSVXj5O2WOn4FXuVWiUnXdirxHMCEgS63XjpSNLKHjDDS0u4B3l5QXnHq0bePzZoh0JZsQznWSqHrpvAU1~SZwBh3~3MZVqdGjYT7xcaZnU5hvLzgp8FzN~5AVx-bhorZRmfwo0lk~qtnKzDs8RQ1N1P9Ls~NO3X9DgZw-4RlcbSZfq~Ucup7uw4ISQFwkB2sq2hTqkUxhiw24D~MzRDH8~REw0huvM6wNrdKzPTHyrHs0jFyA5vF0f0uGGESXbpJ6GnK87kSA1TWBMKA__"
                                   alt=""/>
                              <div className="absolute p-4 bottom-5 left-[700px] backdrop-blur-xl">
                                  <p className="text-xl font-bold">Bohauss</p>
                                  <p className="text-sm text-slate-200">Luxury big sofa 2-seat</p>
                                  <div className="flex flex-row justify-between items-center">
                                      <p className="text-lg font-bold">Rp 17.000.000</p>
                                      <ArrowRight className="h-4 w-4"/>
                                  </div>
                              </div>
                          </CarouselItem>
                          <CarouselItem className="w-[600px] relative">
                              <img className="h-[500px] w-[900px]"
                                   src="https://s3-alpha-sig.figma.com/img/9c37/2fe8/965eb67a69b0e20edcbe632460a2627c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMQnpCZ8gmTHzznFBFvFzjsBRJBTn9cDpgPbKV~11o5HIIn6SBeZuKJ3u31iTQI7XF7rtGJrew6xiGI9aX4kafLLMhD5iyGdCzqRLsAE1vFZ8gcwDZI7uFrALX0hv2PR4d6fqqjPvEXpc7z0JoMOgkwMEJZ57kO4IB4JlSFSqnTkctSGgr2W4WERlI0iLZr4mIerIuq67rbpPcchz0ahXfVzmiSGp6dhfpZZYwKGRCF77phMJVq~h~8z03~NgprV~k6ZYPzUBOoH88XGY4rxvRSVUIye4nND4kUZ30q41tjB99DgIA904ViXtvlz~T-IdiWxWtt3H1dMmwAu0DM5Tw__"
                                   alt=""/>
                              <div className="absolute p-4 bottom-5 left-[700px] backdrop-blur-xl">
                                  <p className="text-xl font-bold">Bohauss</p>
                                  <p className="text-sm text-slate-200">Luxury big sofa 2-seat</p>
                                  <div className="flex flex-row justify-between items-center">
                                      <p className="text-lg font-bold">Rp 17.000.000</p>
                                      <ArrowRight className="h-4 w-4"/>
                                  </div>
                              </div>
                          </CarouselItem>
                      </CarouselContent>
                      <div className="absolute top-[-30px] left-[1000px] z-10">
                          <CarouselPrevious
                              className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10"/>
                          <CarouselNext
                              className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10"/>
                      </div>

                  </Carousel>
                  <div className="absolute p-10 bg-white max-w-[350px] flex flex-col gap-4 bottom-16 left-16 h-auto">
                      <p className="text-3xl font-bold">High-Quality
                          Furniture Just
                          For You</p>
                      <p className="text-slate-400 text-md">Our furniture is made from selected and best quality
                          materials that are suitable for your dream home</p>
                      <button className="bg-orange-300 p-6 text-white">
                          Shop now
                      </button>
                  </div>
              </div>
          </div>
          <div className="flex flex-row items-center gap-24 justify-center mt-20 md:flex-nowrap flex-wrap">
              <div className="flex flex-row gap-4 items-center">
                  <Trophy className="w-10 h-10"/>
                  <div className="flex flex-col gap-2">
                      <p className="font-medium text-md">High Quality</p>
                      <p className="text-sm text-slate-400">crafted from top materials</p>
                  </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                  <BadgeCheck className="w-10 h-10"/>
                  <div className="flex flex-col gap-2">
                      <p className="font-medium text-md">Warrany Protection</p>
                      <p className="text-sm text-slate-400">Over 2 years</p>
                  </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                  <Handshake className="w-10 h-10"/>
                  <div className="flex flex-col gap-2">
                      <p className="font-medium text-md">Free Shipping</p>
                      <p className="text-sm text-slate-400">Order over 150 $</p>
                  </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                  <Speech className="w-10 h-10"/>
                  <div className="flex flex-col gap-2">
                      <p className="font-medium text-md">24 / 7 Support</p>
                      <p className="text-sm text-slate-400">Dedicated support</p>
                  </div>
              </div>
          </div>

          <p className="text-3xl font-bold text-center mt-20">Our Products</p>
          <div className="m-auto flex flex-row flex-wrap gap-8 justify-center mt-5">
              {cards.map(card => (
                  <Card key={Math.random() * 100} title={card.title} text={card.text} price={card.price}
                        img={card.img}/>
              ))}
          </div>
          <div className="flex justify-center mt-5">
              <button
                  className="hover:bg-orange-300 hover:text-white ease-in transition-all bg-transparent border px-8 py-2 border-orange-300 text-orange-300 text-xl">Show
                  more
              </button>
          </div>

          <div className="bg-[#FCF8F3] p-10 justify-center items-center flex flex-row mt-10 gap-20">
              <div className="max-w-[300px] flex flex-col gap-4">
                  <p className="font-bold text-3xl">50+ Beautiful rooms
                      inspiration</p>
                  <p className="text-sm">Our designer already made a lot of beautiful prototipe of rooms that inspire
                      you</p>
                  <button
                      className="w-[150px] text-white bg-orange-300 hover:bg-orange-400 py-2 px-4 transition-all ease-in">Explore
                      more
                  </button>
              </div>
              <Carousel className="w-[600px]" opts={{loop: true}}>
                  <CarouselContent>
                      <CarouselItem className="w-[600px] relative">
                          <img className="h-[500px] w-[900px]"
                               src="https://s3-alpha-sig.figma.com/img/49fc/0429/c4613af2a4e6c1b94a0bdbbb862009b2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKh2S1S8fx7~5odGBZjCbzSl1wcS8IFMEU5mVZdb~3ZMUf-ndNXBVJMGRP2B-~sZvhAIn5YIwkT7PaLJx18ox9ggf364zbKgzOHgjTzZ8NYG6w-~qwjDosTkWgJ2j~GRBeeQ48ygOzRECbZnAnDaF1etsfTtWY~w86qQ8uRj6fXR8C2IJKiLULh4F9p6c5qjfeMK8zmOnoQzZz9Pti9caWslzVjK-5hNEMaDklr2luQpPdJTOo6HmsAG1GQ8AbX2ZUEcN-8JYsLsPMysweHKqDJDnjiZ6bTVOuyLs2nTc8CAClCTiuLA6ie5j-PzWmpDP21BPSsXtTg2UA-wB4a2iA__"
                               alt=""/>
                          <div className="flex flex-col gap-3 absolute p-10 bottom-5 left-[50px] backdrop-blur-xl">
                              <p className="text-sm">01 -- Bedroom</p>
                              <p className="text-2xl font-bold">Inner Peace</p>
                              <button className="bg-orange-300 p-2 w-8 hover:bg-orange-400 transition-all ease-in">
                                  <ArrowRight className="h-4 w-4 text-white"/>
                              </button>
                          </div>
                      </CarouselItem>
                      <CarouselItem className="w-[600px] relative">
                          <img className="h-[500px] w-[900px]"
                               src="https://s3-alpha-sig.figma.com/img/0377/3802/157dc756f64c0f2e4e93d6fea0c7c23b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRaPFluUpM9AimQJ72U72jCs16WQp-HMWSHODLq-kJkiyHFlBKnqc-NXvZT3aMHqWLrCCnSVXj5O2WOn4FXuVWiUnXdirxHMCEgS63XjpSNLKHjDDS0u4B3l5QXnHq0bePzZoh0JZsQznWSqHrpvAU1~SZwBh3~3MZVqdGjYT7xcaZnU5hvLzgp8FzN~5AVx-bhorZRmfwo0lk~qtnKzDs8RQ1N1P9Ls~NO3X9DgZw-4RlcbSZfq~Ucup7uw4ISQFwkB2sq2hTqkUxhiw24D~MzRDH8~REw0huvM6wNrdKzPTHyrHs0jFyA5vF0f0uGGESXbpJ6GnK87kSA1TWBMKA__"
                               alt=""/>
                          <div className="flex flex-col gap-3 absolute p-10 bottom-5 left-[50px] backdrop-blur-xl">
                              <p className="text-sm">01 -- Bedroom</p>
                              <p className="text-2xl font-bold">Inner Peace</p>
                              <button className="bg-orange-300 p-2 w-8 hover:bg-orange-400 transition-all ease-in">
                                  <ArrowRight className="h-4 w-4 text-white"/>
                              </button>
                          </div>
                      </CarouselItem>
                      <CarouselItem className="w-[600px] relative">
                          <img className="h-[500px] w-[900px]"
                               src="https://s3-alpha-sig.figma.com/img/9c37/2fe8/965eb67a69b0e20edcbe632460a2627c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMQnpCZ8gmTHzznFBFvFzjsBRJBTn9cDpgPbKV~11o5HIIn6SBeZuKJ3u31iTQI7XF7rtGJrew6xiGI9aX4kafLLMhD5iyGdCzqRLsAE1vFZ8gcwDZI7uFrALX0hv2PR4d6fqqjPvEXpc7z0JoMOgkwMEJZ57kO4IB4JlSFSqnTkctSGgr2W4WERlI0iLZr4mIerIuq67rbpPcchz0ahXfVzmiSGp6dhfpZZYwKGRCF77phMJVq~h~8z03~NgprV~k6ZYPzUBOoH88XGY4rxvRSVUIye4nND4kUZ30q41tjB99DgIA904ViXtvlz~T-IdiWxWtt3H1dMmwAu0DM5Tw__"
                               alt=""/>
                          <div className="flex flex-col gap-3 absolute p-10 bottom-5 left-[50px] backdrop-blur-xl">
                              <p className="text-sm">01 -- Bedroom</p>
                              <p className="text-2xl font-bold">Inner Peace</p>
                              <button className="bg-orange-300 p-2 w-8 hover:bg-orange-400 transition-all ease-in">
                                  <ArrowRight className="h-4 w-4 text-white"/>
                              </button>
                          </div>
                      </CarouselItem>
                  </CarouselContent>
                  <div className="">
                      <CarouselNext
                          className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10"/>
                  </div>
              </Carousel>
          </div>

          <p className="text-3xl font-bold mt-20 mb-8 text-center">Tips & tricks</p>

          <Carousel className="w-full max-w-3xl m-auto" opts={{loop: true}}>
              <CarouselContent className="-ml-1">
                  {Array.from({length: 5}).map((_, index) => (
                      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                              <div
                                  className="flex flex-col max-w-[400px] gap-4 shadow-sm hover:shadow-xl transition-all ease-in">
                                  <img
                                      src="https://s3-alpha-sig.figma.com/img/53ab/ba51/c795f73b89eadbfba6f49c31e29633ca?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZilvLzSXnLipnWdfV~rmpgm-EPnurNjgSY6QI4AM7Q3gOT3BI9EvpQhBVcM7CPlcSk21xDK~~A7WbVp1pAsUu-UcbvufPv-SCKK2SM3kTun52iT0uSpDA1aKzq0L62mg3W4GvakThZOoexcKef1Y0xAdIKOb0~Yn2yg88C38S~hqKFWGAXK06dHxlLI9H5WALkUv~-niJzmnKxOLlI7qTr~JnmpQjA6W2hhI~CzoTLlAxo9m0Gdbv3fyUbFaDfqUL0W1nyGE2vyMpZWsBuYQAppQ08ZuDjk1gQaM-xYoIlulloEZC9-TWE9k~fhtcUhN1Gj0i6JWCIJKXaOh~jCNsQ__"
                                      alt="img" className="w-[400px]"/>
                                  <div className="flex flex-col gap-2 p-4">
                                      <p className="text-xl font-bold">How to create a living
                                          room to love</p>
                                      <p className="text-sm text-slate-500">20 jan 2020</p>
                                  </div>

                              </div>
                          </div>
                      </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious
                  className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10"/>
              <CarouselNext
                  className="bg-[#E89F71] text-white hover:bg-orange-300 hover:text-white w-10 h-10"/>
          </Carousel>
          <p className="text-md text-center text-slate-500 mt-10">Share your setup with</p>
          <p className="text-3xl font-bold text-center">#FuniroFurniture</p>
          <div className="flex flex-row gap-4 mb-10">
              <img
                  src="https://s3-alpha-sig.figma.com/img/9954/4b25/1da1dc5c1c4cd5091a6369784c3b3366?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9NdUW~3JqKr24ZV4YqqUwIVj~m6bCKfcxhiq3PJPcyTYRKF14D9UzEY2fMZcre7snWWcSwrLH8ITOyZ3YWZgquZJsr-IWVzgNve727eXrpp8ozwFKVKjDUcl1A7oBJqK~kN8hHO9gU40gbbTyHncXDi0L56NtiguT4h3FIfKwD8AG3bbfHhmKyHR-yJeRk0nuqOO1inVEsp9xIhY~tzOnORKHo2Ung~v6W~knV5shgptGKoI42CE5JdcomDX4xsx0O2t1W9wn28Ez3FyGocZ0Jf7lBlL7uYjp4PxKPO7nIrIE~~sTtK1ozw4UYIqTuXfWXRrrNLf6HRRxUr4rtbVw__"
                  alt="img" className="w-[300px] h-[500px]"/>
              <img
                  src="https://s3-alpha-sig.figma.com/img/a4bb/2814/2f4aae4edaceced4645de9ad49216504?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1EcUcV93tCluxtMMlBJr7d-EAduRBq35okbrOCzawU8d744x~aRH8NoWuPpGFzprVXz1wqlhgMQOP2tCKdpgg4xS6ikOA3QesNiBufUIKdE9xzYUPg2oo-9ar5DHeW4rhHB3-kpsl1P0SKQ73lVFXoFYry8Bp4Mv7hPadeDazNuOJ5W4mRU~FqL70-muxPxzvHA3zX7XzEuGZ9BmysYAjW~O0YSatG4afcPDziV4901UZAK5Gc~kQBXb2ZWocuaGroCmPAtmHgTTruser1fokaN-oTnvLHXMadp4kuKYmXO5pe44XQHSA39NwRXaWpPnwSZo7L6iygLJWrb7eDCFA__"
                  alt="img" className="w-[700px] h-[300px]"/>
              <img
                  src="https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dx5hcZNHUB0fLr1nIMyUFdZllq7suo~WOhacRAUzzXJAHgqgCrVXGc8Px4rmlMufHTA806aofJHxfB0wLckNCeC~I88VrUmKtoX1Z-TluyAtrPWacurusNYR8BQ6ZiLR-ogsJg9DwFTb18zrqrIXS-3W5sD79uAU7RfAtKyVNnxdjlVB0E6T67ktQU89EJW-Bmj6zrwhZdCaXCpztcfQL7GHAdKDQ7WKUEgD97s4e7x-AHrMy67TDOTQXl5~0z-cNKz8J1DLNCbdAMaHBmraF7yg~yn98~KPzhJqFN6jsykiA7e22S4X3XKck9cWUpmCXPpAmgBgYISn7Vtf8-Nvjw__"
                  alt="img" className="w-[400px] h-[700px]"/>
              <img
                  src="https://s3-alpha-sig.figma.com/img/057c/3bab/f9de6c6ff643cd2e7661215ad26aed46?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwPi2no589w20wFyySuYOBMXet1AUiu9hWOHc5rDMTbprS4MeD3wXBvKwyTL56iBAQdAd9G78hUsZ2LeCevwr1vxGMAO5F9XbIonaI5JkrRg1lz-ssvy9dybGQ3bDab6HKZbpOpx-Epw7sXJjUp6MRvtMY~jnSgHbkyuffonPjYoqwr7CAUKrPp8AMyauYKRHZcRZiV0zlQPJrXxiEKcJv5K734is9HBDqsBbEJFXAFh51bA-JU44e-3JPVtL-yHlJ4zQJv53i6BsmIeUXgIkRlWFEnpJTuyQzAUI40RPWO0lVlZJH30i-M-AJOZ-uMomQVK7PocmKwcgMM99OVpsA__"
                  alt="img" className="w-[600px] h-[300px]"/>
              <img
                  src="https://s3-alpha-sig.figma.com/img/b167/0f90/40560e3b59b4fd3c2538107c6fa70736?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwQj2V4y5RWSBvj569GjG1Xibid5VW4QM3a1AQ7xeG1TndzrGQ1uA7MWzxZ986Cg9P6mG4Dr5-b1l~PVkDPXYvhAFptAqTXUwnf5Qqzqhk7o~csqsTlwcF4HD4e9j5sYLouzw2wLhyvcTRf7NR2aRe64Am~N1Di2-6kTA1Snveb~FeBzjewMd-puO3~EiJSy1bM2JTueEzsxYTT7NlU~A~yvZ5ZkrbIkMQXDWtbhWe5JBLlt0pg5o9DQfD0o~IWudq3ZRy9U1GGpgKzy3mPuI9LA7~aeBXn3jZh1WwrOtSFIoqzhxE2-Or5e6CNWQfMWu0SdHz6JeyzhB49oFjkYgw__"
                  alt="img" className="w-[400px] h-[500px]"/>
          </div>

          <Separator className="w-1/2  m-auto" />
      </>
  )
}
