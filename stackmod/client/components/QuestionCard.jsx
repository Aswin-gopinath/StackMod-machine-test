export default function QuestionCard({ item }) {

    return (
        <div className="mt-4" >
            <p>{item?.slNo} {item?.questionTest}</p>
            {item?.options?.map((item, index) => (
                <span className="ml-4 flex items-start justify-start" key={index}>
                    <input type="checkbox" className="mt-1" /><p className="ml-4">{item?.opt}</p>
                </span>
            ))}
            <p></p>
        </div>
    )
}