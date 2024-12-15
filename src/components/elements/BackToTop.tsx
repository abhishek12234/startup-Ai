import { RiArrowUpSLine } from 'react-icons/ri'
export default function BackToTop({ scroll }: any) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This will ensure a smooth scroll to the top
        })
    }

    return (
        <>
            <button
                className={`scroll-top ${
                    scroll ? 'open' : ''
                } flex items-center justify-center`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <i className="icon-top-arrow">
                    <span className="text-[27px]">
                        <RiArrowUpSLine />
                    </span>
                </i>
            </button>
        </>
    )
}
