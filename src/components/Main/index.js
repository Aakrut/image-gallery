import { useEffect, useState } from "react";
import {
  Wrapper,
  ContentWrapper,
  Search,
  Input,
  Button,
  ImageCard,
  Image,
  ImageWrapper,
  ButtonWrapper,
} from "./MainElements";
import unsplash from "../../unsplash";
import Modal from "../modal/Modal";

const Main = () => {
  const [image, setImage] = useState([]);

  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getImages = () => {
    unsplash
      .get(`/search/photos?page=${page}&query=${query}`)
      .then((res) => {
        setImage(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
     getImages();
  }, [query, page]);

  return (
    <Wrapper>
      <Modal isOpen={isOpen} toggle={toggle} />

      <ContentWrapper>
        <Search>
          <Input
            placeholder="Search Image"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Search>

        <ImageWrapper>
          {image.map((item) => {
            return (
              <>
                <ImageCard>
                 
                    <Image src={item.urls.regular} alt={item.alt_description} />
                  
                </ImageCard>
              </>
            );
          })}
        </ImageWrapper>

        <ButtonWrapper>
          {page > 1  ?  (
            <Button onClick={() => setPage(page - 1)}>Previous</Button>
          ) : null}

          {query === "" ? null : (
            <Button onClick={() => setPage(page + 1)}>Next</Button>
          )}
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Main;
