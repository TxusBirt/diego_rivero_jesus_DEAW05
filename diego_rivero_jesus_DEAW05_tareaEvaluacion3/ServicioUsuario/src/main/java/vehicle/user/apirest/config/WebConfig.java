package vehicle.user.apirest.config;
// calse de configuración para que permita solicitudes desde otro dominio (policy CORS)
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Establece el patrón de URL se permite
                .allowedOrigins("http://localhost:8082") // Permite solicitudes desde ese origen
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Permite los métodos HTTP especificados
                .allowCredentials(true); // Permite enviar credenciales (cookies) en la solicitud
    }
}

