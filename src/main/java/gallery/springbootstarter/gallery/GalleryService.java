package gallery.springbootstarter.gallery;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class GalleryService {
	
	private List<Picture> pictures = Arrays.asList(
			new Picture("001", "kukkaKuva", "Hieno Kukka kuva"),
			new Picture("002", "koiraKuva", "Tosi hienoa koira"),
			new Picture("003", "apinaKuva", "tosi hieno apina")
			);

		public List<Picture> getAllPictures(){
			return pictures;
		}
		
		
		public Picture getPicture(String id) {
			return pictures.stream().filter(t -> t.getId().equals(id)).findFirst().get();
		}
}
