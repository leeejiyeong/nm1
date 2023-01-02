package co.nambaone.prj.review.command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.review.service.ReviewService;
import co.nambaone.prj.review.service.ReviewVO;
import co.nambaone.prj.review.serviceImpl.ReviewServiceImpl;



public class ReviewSelectList implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		//{"name":"홍길동","age":20} : json포맷.
		ReviewService dao = new ReviewServiceImpl();
		ReviewVO vo = new ReviewVO();
		
		vo.setMovieCode(request.getParameter("movieCode"));
	
		List<ReviewVO>list = dao.reviewSelectList();
		ObjectMapper mapper = new ObjectMapper();
		
		String json = null;
		try {
			json = mapper.writeValueAsString(list);		// list => json string
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}	
		
		
		return "Ajax:" + json;
	}

}
