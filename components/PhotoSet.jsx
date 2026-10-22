import { asset } from "@/lib/asset";

export default function PhotoSet() {
  return (
    <>
    <div id="photoset" hidden><img loading="lazy" decoding="async" src={asset("/images/petronas-twin-towers-kuala-lumpur.jpg")} alt="Petronas Twin Towers, Kuala Lumpur" data-cap="Petronas Twin Towers, Kuala Lumpur" /><img loading="lazy" decoding="async" src={asset("/images/sultan-abdul-samad-building-kuala-lumpur.jpg")} alt="Sultan Abdul Samad Building, Kuala Lumpur" data-cap="Sultan Abdul Samad Building, Kuala Lumpur" /><img loading="lazy" decoding="async" src={asset("/images/thean-hou-temple-kuala-lumpur.jpg")} alt="Thean Hou Temple, Kuala Lumpur" data-cap="Thean Hou Temple, Kuala Lumpur" /><img loading="lazy" decoding="async" src={asset("/images/temple-of-literature-ha-noi.jpg")} alt="Temple of Literature, Hà Nội" data-cap="Temple of Literature, Hà Nội" /><img loading="lazy" decoding="async" src={asset("/images/buddha-tooth-relic-temple-singapore.jpg")} alt="Buddha Tooth Relic Temple, Singapore" data-cap="Buddha Tooth Relic Temple, Singapore" /><img loading="lazy" decoding="async" src={asset("/images/merdeka-118-kl-tower.jpg")} alt="Merdeka 118 & KL Tower" data-cap="Merdeka 118 & KL Tower" /><img loading="lazy" decoding="async" src={asset("/images/old-kl-railway-station.jpg")} alt="Old KL Railway Station" data-cap="Old KL Railway Station" /></div>
    <div className="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Photo viewer">
      <button className="lb-btn lb-close" type="button" id="lb-close">Close ✕</button>
      <button className="lb-btn lb-prev" type="button" id="lb-prev" aria-label="Previous photo">←</button>
      <figure><img id="lb-img" alt="" /><figcaption id="lb-cap" /></figure>
      <button className="lb-btn lb-next" type="button" id="lb-next" aria-label="Next photo">→</button>
    </div>
    </>
  );
}
