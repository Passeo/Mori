import character from '../../assets/Character.svg'
import grip from '../../assets/Grip.svg'
import gaming from '../../assets/Gaming.svg'
import minimal from '../../assets/Minimal.svg'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'


function Collections() {


    const collection = [
        { image: character, title: "Character Collection" },
        { image: gaming, title: "Gaming Performance Collection" },
        { image: grip, title: "ErgoGrip Collection" },
        { image: minimal, title: "Minimal Series" }
    ]



    return (
        <>
            <section className="w-full flex flex-col items-center px-4 py-16">
                <h2 className="font-Nobile text-3xl sm:text-4xl md:text-6xl text-center mt-10">
                    Our Collections
                </h2>

                <p className="font-inter text-base sm:text-lg md:text-[20px] text-center mt-4">
                    Find the mouse that matches your grip and your vibe
                </p>

                <div
                    className="
      w-full mt-12
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-6 md:gap-8 lg:gap-20
      justify-items-center
      mx-auto
      max-w-[360px] sm:max-w-md md:max-w-3xl lg:max-w-6xl
    "
                >
                    {collection.map((item) => (
                        <CardContainer key={item.title}>
                            <CardBody className="collection flex flex-col items-center justify-center">
                                <CardItem translateZ="200" className="my-4">
                                    <img src={item.image} alt={item.title} />
                                </CardItem>
                                <CardItem translateZ="100" className="font-Nobile text-xl sm:text-2xl text-center mb-3">
                                    {item.title}
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-10 pb-10">
                    <button className="text-white font-inter text-lg sm:text-[20px] get cursor-pointer">
                        GO GET YOURS!
                    </button>
                </div>
            </section>

        </>


    )
}

export default Collections;

