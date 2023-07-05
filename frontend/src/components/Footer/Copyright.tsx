import methods from './../../assets/images/methods.png'

export default function Copyright() {
    const shopTitle = window._env_.SHOP_TITLE

    return (
        <div className="bg-gray-800 py-4">
            <div className="container flex items-center justify-between">
                <p className="text-white">© 2023 { shopTitle } - All Rights Reserved</p>
                <div>
                    <img src={methods} className="h-5" />
                </div>
            </div>
        </div>
    )
}
