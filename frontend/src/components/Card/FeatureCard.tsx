import { Feature } from '../../types/responses/home_response'

interface FeatureCardProps {
    data: Feature
}

export default function FeatureCard(data: FeatureCardProps) {
    const apiUrl = window._env_.API_URL

    return (
        <div
            className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src={`${apiUrl}${data.data.image.data.attributes.url}`} className="lg:w-12 w-10 h-12 object-contain" />

            <div>
                <h4 className="font-medium capitalize text-lg">{data.data.header}</h4>
                <p className="text-gray-500 text-xs lg:text-sm">{data.data.text}</p>
            </div>
        </div>
    )
}
