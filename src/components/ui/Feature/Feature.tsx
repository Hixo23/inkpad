import { Card, CardBody, CardHeader } from '@nextui-org/react'

type FeatureProps = {
    title: string
    description: string
}

export function Feature({ title, description }: FeatureProps) {
    return (
        <Card className="dark p-4">
            <CardHeader className="flex justify-center">
                <p className="text-center font-semibold text-2xl">{title}</p>
            </CardHeader>
            <CardBody>
                <p>{description}</p>
            </CardBody>
        </Card>
    )
}
