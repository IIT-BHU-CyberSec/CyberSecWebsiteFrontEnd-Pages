export default function NewHeader() {

    return (
        <div className="row h-100">
            <div className="col-4 montserrat-800 fs-1 ps-md-5 pt-4">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CTF</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="col-4"></div>
            <div className="col-4 position-relative">
                <div className="position-absolute bottom-0 right-20">
                    <h1 className="montserrat-900 text-end light-color display-1">
                        Let the hacking begin
                    </h1>
                </div>
            </div>
            <style>{`
                .right-20 {
                    right: 20px;
                }
                @media (min-width: 1200px) {
                    .right-20 {
                        right: 50px;
                    }
                }
            `}</style>
        </div>
    )
}