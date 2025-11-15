import type { ImgMeta } from "./picture";

type Image = {
	src: ImgMeta | ImgMeta[];
	naturalDimensions: {
		width: number;
		height: number;
	};
	caption?: string;
};

export type Data = { Image: Image };

export type PersonalTestimony = {
	name: string,
	title: string | null,
	aboutHref: string | null,
	testimony: string
}

export type CompanyTestimony = {
	title: string,
	testimony: string
}