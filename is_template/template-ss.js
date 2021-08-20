export class StyleField {
    label: string;
    className: string;
}

export class BannerWithCTATemplate implements CampaignTemplateComponent {

    @title("Background Image URL")
    @subtitle("あああ.")
    imageURL: string = "https://cdn.evergage.com/evergage-content/nto/nto_hero_banner_bike.jpg";

    @subtitle("Define header and subheader text styling.")
    @options([
        { label: "Light on Dark", className: "evg-light-on-dark" },
        { label: "Dark on Light", className: "evg-dark-on-light" }
    ])
    style: StyleField = { label: "Light on Dark", className: "evg-light-on-dark" };

    header: string = "Header Text";

    @title("Header Visibility")
    headerVisibility: boolean = true;

    subheader: string = "Subheader Text";

    @title("Subheader Visibility")
    subheaderVisibility: boolean = true;

    @title("CTA Text")
    ctaText: string = "Call To Action";

    @title("CTA Destination URL")
    @subtitle("Requires full URL string including https://")
    ctaUrl: string = "https://www.northerntrailoutfitters.com";

    @title("CTA Visibility")
    ctaVisibility: boolean = true;

    @options([
        { label: "Left", className: "evg-left" },
        { label: "Right", className: "evg-right" }
    ])
    align: StyleField = { label: "Left", className: "evg-left" };

    run(context: CampaignComponentContext) {
        return {};
    }

}