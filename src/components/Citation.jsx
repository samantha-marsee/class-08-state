export default function Citation({ citation, align = 'left' }) {
  return (
    <p className="citation" style={{ textAlign: align }}>
      Source: <cite>{citation}</cite>
    </p>
  )
}
