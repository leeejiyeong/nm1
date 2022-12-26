package co.nambaone.prj.admin.command;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.user.service.UserService;
import co.nambaone.prj.user.serviceImpl.UserServiceImpl;

public class chartLine implements Command {
	//회원 수 차트(라인차트)
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		UserService service = new UserServiceImpl();
		List<Map<String, Integer>> map = service.chartLine();
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
