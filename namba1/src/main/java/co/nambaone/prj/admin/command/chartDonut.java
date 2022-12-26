package co.nambaone.prj.admin.command;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.movie.service.MovieService;
import co.nambaone.prj.movie.serviceImpl.MovieServiceImpl;

public class chartDonut implements Command {
	//선호장르 차트(도넛차트)
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		MovieService service = new MovieServiceImpl();
		List<Map<String, Integer>> map = service.chartDonut();
		String json = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			json = mapper.writeValueAsString(map);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return "Ajax:" + json;
	}

}
