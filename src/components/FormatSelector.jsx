const FormatSelector = ({formats, selectedFormat, setSelectedFormat, label}) => {
  return (
    <div className="p-4">
        <label className="block font-semibold md:font-bold text-sm md:text-base">{label}</label>
        <select
        value={selectedFormat}
        onChange={(e) => setSelectedFormat(e.target.value)}
        className="border border-slate-800 p-2 w-60 rounded-md"
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