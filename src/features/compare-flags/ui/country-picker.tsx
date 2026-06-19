"use client";

import { CustomSelect } from "@shared/ui";
import type { Locale } from "@i18n/routing";
import { getAllCountries } from "@entities/country";

interface CountryPickerProps {
  locale: Locale;
  value: string;
  label: string;
  onChange: (slug: string) => void;
}

/** Large serif slot selector for the comparator. */
export function CountryPicker({ locale, value, label, onChange }: CountryPickerProps) {
  const options = getAllCountries(locale).map((c) => ({ value: c.slug, label: c.name }));
  return <CustomSelect serif value={value} options={options} onChange={onChange} ariaLabel={label} />;
}
