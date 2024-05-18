import Link from 'next/link'

export function Experience(
    title: string,
    place: string,
    range: string,
    details: string[],
    sub_details: Map<number, string[]> = new Map(),
) {

  return (
    <div className="mb-4">
      <h4 className="text-xl">{title}</h4>
      <h5 className="hl">{range}</h5>
      <p><em>{place}</em></p>
      {details.map((detail, idx) => (
        <div key={idx}>
            <li>{detail}</li>
            <ul>
            {sub_details.has(idx) && sub_details.get(idx)?.map((subDetail, subIdx) => (
              <li key={subIdx}>{subDetail}</li>
            ))}
            </ul>
        </div>
      ))}
    </div>
  )
}
