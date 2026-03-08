import Header from "@/components/Header";

const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        /*Styles we want on all pages*/

        // Main
        <main className="min-h-screen text-gray-400">

            <Header />

            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}

export default Layout;