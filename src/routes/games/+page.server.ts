import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from "@sveltejs/kit";
import { filterConfigs } from "$lib/filters";
import type { Params } from '../../app';

export const load: Load = async ({ url }) => {
  const response = (url.search.length > 0) 
    ? await fetch(`${LINK}/games${url.search}`) 
    : await fetch(`${LINK}/games`);
  const responseBody = await response.json();


  if (responseBody.errCode) {
    error(500, {
      message: responseBody.errBody[0].msg
    });
  };

  const selectedParams: Record<string, Params> = {};
  for (const filter of filterConfigs) {
    selectedParams[filter.key] = filter.type === 'multi'
      ? url.searchParams.getAll(filter.key)
      : url.searchParams.get(filter.key) ?? null;
  }

  for (const filter of filterConfigs) {
    const arr = responseBody.data[filter.arrayKey];
    if (!arr || !Array.isArray(arr)) continue;
    const param = selectedParams[filter.key];
    arr.forEach(item => {
      item.checked = filter.type === 'multi'
        ? (param as string[]).includes(item.name)
        : item.value === param;
    });
  };

  return {
    gamesData: responseBody.data,
    selectedParams
  };
};