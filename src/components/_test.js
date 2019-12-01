## Countries - bar chart and donut

<Story name='Countries - bar chart and donut'>
    {() => {
    const [selectedContinent, setSelectedContinent] = useState("africa");
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedYear, setSelectedYear] = useState(undefined);

    useEffect(() => {
      setSelectedCountry({});
    }, [selectedContinent]);

    useEffect(() => {
      setSelectedYear(undefined);
    }, [selectedCountry]);

    return (
      <>
        <Chips
          chips={Object.keys(MOCK_CONTINENT_POPULATION).map(key => ({
            title: key
          }))}
          onChange={chips => setSelectedContinent(chips[0] || "africa")}
        />
        <FlexWrapper>
          {selectedContinent && MOCK_WORLD_DATA[selectedContinent] && (
            <Chart
              title={`Population: ${(MOCK_CONTINENT_POPULATION[
                selectedContinent
              ] /
                100) *
                7500} million, countries shown by relative population`}
              color={MAIN_THEME.SECONDARY_DARK.color.background}
              hoverColor={MAIN_THEME.BLACK.color.background}
              alternateColor={MAIN_THEME.BLACK.color.background}
              values={MOCK_WORLD_DATA[selectedContinent]}
              onClick={value => setSelectedCountry(value)}
              maxBarWidth={2}
              minBarWidth={2}
              dynamicChart
              type="horizontal-bar"
            />
          )}
          <FlexColumn>
            {MOCK_CONTINENT_POPULATION[selectedContinent] && (
              <Chart
                title="(%) World population"
                color={MAIN_THEME.BLACK.color.background}
                alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
                hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
                width="20vw"
                fillPercentage={MOCK_CONTINENT_POPULATION[selectedContinent]}
                type="donut"
              />
            )}
            {selectedCountry.title &&
              MOCK_CONTINENT_POPULATION[selectedContinent] && (
                <Chart
                  title="(%) Continent population"
                  color={MAIN_THEME.BLACK.color.background}
                  alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
                  hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
                  width="20vw"
                  fillPercentage={
                    (selectedCountry.y /
                      ((MOCK_CONTINENT_POPULATION[selectedContinent] / 100) *
                        7500)) *
                    100
                  }
                  type="pie"
                />
              )}
          </FlexColumn>
        </FlexWrapper>
        {selectedCountry.title && (
          <>
            <h3>
              <Text
                foregroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
              >
                <Span>{selectedCountry.title}:</Span> {selectedCountry.y}{" "}
                million people
              </Text>
            </h3>
            {MOCK_POPULATION_OVER_TIME[selectedCountry.title] && (
              <Chart
                title="Population over time (mppl)"
                color={MAIN_THEME.SECONDARY_DARK.color.background}
                alternateColor={MAIN_THEME.BLACK.color.background}
                hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
                values={MOCK_POPULATION_OVER_TIME[selectedCountry.title]}
                onClick={value => setSelectedYear(value)}
                dynamicChart
                showTextValues
                width="40vw"
                dotRadius="2"
                type="vertical-line"
              />
            )}
            {selectedYear && (
              <h3>
                <Text
                  foregroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
                >
                  <Span>{selectedYear.title}:</Span>{" "}
                  {getNumberWithSpaces(selectedYear.y.toString())} million
                  people
                </Text>
              </h3>
            )}
          </>
        )}
      </>
    );
  }}
</Story>