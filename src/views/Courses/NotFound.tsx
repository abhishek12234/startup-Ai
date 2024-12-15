import React from 'react'

const NotFound = () => {
  return (
    <section className="error-page">
    <div className="error-page__shape1">
        <img src="/assets/img/shape/error-page-bg.png" alt=""/>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="error-page__wrapper text-center">
                    <div className="error-page__content">
                        <h2>404</h2>
                        <h3>Opps! Page Not Found</h3>
                        <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                      
                                <div className="flex gap-x-3 w-full mt-7 justify-center">                        
                                    <a  className="ed-btn  !px-5 !w-[190px] !h-[60px]  !text-[15px] !bg-transparent border border-[var(--thm-primary)] text-[var(--thm-primary)] hover:!bg-[var(--thm-primary)] hover:!text-white">Back To Home</a>
                                    <a  className="ed-btn !px-5 !w-[190px] !h-[60px]  !text-[15px]">Explore Courses</a>
                                </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default NotFound
