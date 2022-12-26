package co.nambaone.prj.movie.command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.movie.service.MovieService;
import co.nambaone.prj.movie.service.MovieVO;
import co.nambaone.prj.movie.serviceImpl.MovieServiceImpl;

public class MovieInsertedSelect implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
		MovieService service = new MovieServiceImpl();
		MovieVO vo = new MovieVO();
		List<MovieVO> list = service.insertedSelect(vo);
		ObjectMapper mapper = new ObjectMapper();
		
		
		String json = null;
		
		try {
			json=mapper.writeValueAsString(list);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "Ajax:" + json;
	}

}
