import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
export const MarkerMap = () => {
    console.log("loaded map maker")
    return (
    <ComposableMap>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => {
                    console.log(geo)
                    return (
                <Geography key={geo.rsmKey} geography={geo} />
                )})
            }
        </Geographies>
      </ComposableMap>

    )
}