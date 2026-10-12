type SafariDestination = {
  country: string;
};

type SafariActivity = {
  category: string;
  name: string;
};

function getActivityTheme(activity: SafariActivity) {
  const activityText = `${activity.category} ${activity.name}`.toLowerCase();

  if (/wildlife|safari|game drive/.test(activityText)) {
    return "Wildlife Safari";
  }

  if (/raft|adrenaline/.test(activityText)) {
    return "Adventure";
  }

  if (/river|water|cruise|zambezi/.test(activityText)) {
    return "River";
  }

  if (/cultural|culture|community|village/.test(activityText)) {
    return "Cultural Discovery";
  }

  if (/scenic|sightseeing|falls|aerial|flight/.test(activityText)) {
    return "Falls & Scenic";
  }

  return activity.category;
}

export function getSafariComboName(
  selectedDestinations: readonly SafariDestination[],
  selectedActivities: readonly SafariActivity[],
) {
  const countries = [...new Set(selectedDestinations.map(({ country }) => country))];
  let destinationName: string;

  if (countries.length >= 4) {
    destinationName = "Southern Africa Grand Circuit";
  } else if (countries.length === 3) {
    destinationName = "Southern Africa Trio";
  } else if (countries.length === 2) {
    destinationName = `${countries.join(" & ")} Cross-Border Journey`;
  } else if (countries.length === 1) {
    destinationName = `${countries[0]} Explorer`;
  } else {
    destinationName = "African Discovery";
  }

  const activityThemes = [
    ...new Set(selectedActivities.map(getActivityTheme)),
  ];

  return activityThemes.length
    ? `${destinationName} — ${activityThemes.join(" & ")} Combo`
    : `${destinationName} Combo`;
}
