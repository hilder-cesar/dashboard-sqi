import { faBlogger, faFacebook, faFlickr, faGoogle, faInstagram, faReddit, faTwitter, faVimeo, faWordpress, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHashtag, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const getSocialNetworkIcon = (socialNetwork: string): IconDefinition => {
  switch (socialNetwork) {
    case 'Twitter': return faTwitter;
    case 'Instagram': return faInstagram;
    case 'Facebook': return faFacebook;
    case 'Blogs': return faBlogger;
    case 'Wordpress': return faWordpress;
    case 'Flickr': return faFlickr;
    case 'YouTube': return faYoutube;
    case 'Google News': return faGoogle;
    case 'Vimeo': return faVimeo;
    case 'Reddit': return faReddit;
    case 'Outras Mídias': return faHashtag;
    default: return faQuestion;
  }
};

export const getColor = (socialNetwork: string): string => {
  switch (socialNetwork) {
    case 'Twitter': return '#00ACEE';
    case 'Instagram': return '#FD1D1D';
    case 'Facebook': return '#4267B2';
    case 'Blogs': return '#FC4F08';
    case 'Wordpress': return '#0063DC';
    case 'Flickr': return '#FF0084';
    case 'YouTube': return '#FF0000';
    case 'Google News': return '#4285F4';
    case 'G1': return 'blue';
    case 'Vimeo': return '#86c9ef';
    default: return 'white';
  }
};