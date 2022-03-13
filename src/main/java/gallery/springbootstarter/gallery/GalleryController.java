package gallery.springbootstarter.gallery;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GalleryController {
	
	@Autowired
	private GalleryService galleryService;

	@RequestMapping("/gallery")
	public List<Picture> getAllPictures() {
		return galleryService.getAllPictures(); 
	}
	
	@RequestMapping("/gallery/{id}")
	public Picture getPicture(@PathVariable String id){	
	return galleryService.getPicture(id);
	}
}
