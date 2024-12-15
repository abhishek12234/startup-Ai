export default function Breadcrumb({ breadcrumbTitle }:any) {
    return (
        <>
            
            {/*Start Page Header */}
            <section className="page-header">
                <div className="page-header__bg" style={{backgroundImage: 'url(/assets/img/background/page-header-bg.jpg)'}}>
                </div>

                <div className="container">
                    <div className="page-header__inner text-center">
                        <ul className="thm-breadcrumb">
                            <li><a>Home</a></li>
                            <li className="active">{breadcrumbTitle}</li>
                        </ul>
                        <h2>{breadcrumbTitle}</h2>
                    </div>
                </div>
            </section>
            {/*End Page Header */}

        </>
    )
}
