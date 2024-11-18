const FormatSelector = ({formats, selectedFormat, setSelectedFormat, label}) => {
  return (
    <div className="p-4">
        <label className="block font-bold">{label}</label>
        <select
        value={selectedFormat}
        onChange={(e) => setSelectedFormat(e.target.value)}
        className="border p-2 w-full"
        >
            <option value="">Select format</option>
            {formats.map((format, index) => (
                <option key={index} value={format.itag}>
                    {`${format.quality || format.bitrate} - ${format.type}`}
                </option>
            ))}
        </select>
    </div>
  )
}

export default FormatSelector;